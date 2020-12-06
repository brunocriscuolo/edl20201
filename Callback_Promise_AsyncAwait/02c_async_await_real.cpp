#include <iostream> // Declara objetos que controlam a leitura e a gravação nos fluxos padrão.
#include <iomanip> // Define manipuladores que retornam um tipo não especificado.
#include <string> // Biblioteca padrão de suporte a cadeias de caracteres.
#include <vector> // Biblioteca padrão de suporte ao uso de arrays.
#include <format> // Biblioteca padrão de suporte a formatação das cadeias de caracteres.
#include <thread> // Biblioteca padrão de suporte a implementação de threads.
#include <cpr/cpr.h> // Biblioteca de terceiros que oferece suporte a requisições HTTP: requests (GET,POST) e responses.

using namespace std; // Define o uso do namespace padrão.

// Função que realiza a requisição na API para calcular a taxa de cambio atual da moeda desejada, baseado no valor do euro.
double getExchangeRate(string fromCurrency, string toCurrency)
{
  // Requisição à API de conversão de moedas.
  cpr::Response response = cpr::Get(cpr::Url{"https://api.currencylayer.com/live"},
                           cpr::Parameters{{"access_key", "f68b13604ac8e570a00f7d8fe7f25e1b"}});
  // A taxa de conversão trazida na resposta da requisição é armazenada.
  double rate = response.text["rates"];
  // Como, a moeda padrão cadastrada na API para esse exemplo é o euro,
  // precisamos calcular a razão entre a taxa do euro e a da "moeda origem", cuja conversão é desejada (USD).
  double euro = 1 / rate[fromCurrency];
  // Calculo da taxa final de conversão para a "moeda destino" (HRK).
  double exchangeRate = euro * rate[toCurrency];
  // Retorno do valor calculado.
  return exchangeRate;
}

// Função que realiza a requisição na APi que contém as informações dos países.
double getCountries(string currencyCode)
{
  vector<string> countries; // Declara um vetor de strings
  // Requisição à API para encontrar o códido ISO 4217 do país que contém a moeda em questão.
  cpr::Response response = cpr::Get(cpr::Url{"https://restcountries.eu/rest/v2/currency/" + currencyCode});
  // Como um código de moeda pode pertencer a mais de um país, precisamos iterar a resposta da requisição,
  // armazenando em um vetor o nome de todos os países que contem o codigo da moeda.
  for (int i = 0; i < response.text.size(); i++) {
    countries.push_back(response.text[i]["name"]);
  }
  // Retorno do array de nomes dos países.
  return countries;
}

// Função que imprime na tela os valores convertidos bem como o nome do país em que a moeda convertida pode ser utilizada.
string convertCurrency(double exchangeRate, string fromCurrency, string toCurrency, float amount)
{
  // Chamada da função que busca o nome do país de acordo com o código ISO 4217.
  double countries = getCountries(toCurrency);
  // Calcula a taxa de cambio aplicada ao montante.
  double convertedAmount = (amount * exchangeRate);
  // Imprime o resultado na tela.
  cout << format("{0} {1} vale {2} {3}. Você pode usá-los nos seguintes países: {4}", amount, fromCurrency, convertedAmount, toCurrency, countries) << endl;
}

//Função principal
int main()
{
  // Declaração de uma variável do tipo double,local à thread princial.
  double exchangeRate;
  // Gera um nova thread chamada t1 onde a função getExchangeRate é executada.
  // O resultado do retorno é referenciado pela variável exchangeRate, declarada na thread principal do programa.
  thread t1 ([&]{exchangeRate = getExchangeRate("USD", "HRK");});
  // Gera um nova thread chamada t2 onde a função convertCurrency é executada.
  thread t2 (convertCurrency, exchangeRate, "USD", "HRK", 20);
  // Sincronizar threads:
  t1.join(); // Pausa até t1 terminar.
  t2.join(); // Pausa até t2 terminar.

  return 0;
}
