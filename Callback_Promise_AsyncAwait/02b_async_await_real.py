import asyncio
import requests


async def getExchangeRate(fromCurrency, toCurrency):
  try:
    url = 'http://data.fixer.io/api/latest'
    payload = {"access_key" : "f68b13604ac8e570a00f7d8fe7f25e1b", "format" : "1"}
    response = await requests.get(url, params=payload)

    rate = response.data.rates
    euro = 1 / rate[fromCurrency]
    exchangeRate = euro * rate[toCurrency]

    return exchangeRate

  except:
    print("Unable to get currency {} and  {}".format(fromCurrency, toCurrency)


async def getCountries(currencyCode):
  try:
    url = 'https://restcountries.eu/rest/v2/currency/' + str(currencyCode)
    response = await requests.get(url)

    return map(country.name(), response.data);

  except:
    print(“Unable to get countries that use {}”.format(currencyCode)


async def convertCurrency(fromCurrency, toCurrency, amount):
  exchangeRate = await getExchangeRate(fromCurrency, toCurrency)
  countries = await getCountries(toCurrency)
  convertedAmount = (amount * exchangeRate).toFixed(2)

  print("{} {} is worth {} {}. You can spend these in the following countries: {}".format(amount, fromCurrency, convertedAmount, toCurrency, countries))
