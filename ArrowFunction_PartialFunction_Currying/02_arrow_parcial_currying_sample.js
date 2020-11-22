parseAttachements: (item, baseUrl, images, documents) => { // uso de arrow function 
        images = images || []
        documents = documents || [] 

        return _.mapValues(item, (v, k) => { // uso de arrow function 
            const parse = baseUrl => type => (attachement, size) => // na função parse temos o uso de Currying, recebendo primeiro baseUrl e depois type. Após isso, ainda recebe attachment e size juntos, para enfim poder chamar a função attachmentUrl com todos os argumentos
                            self.attachementUrl(baseUrl, type, attachement, size);
            const parsePreview = parse(baseUrl)('preview') // uso de partial function, criando uma função com um argumento fixo, o preview, passando a receber só um parametro
            const parseStatic = parse(baseUrl)('static') // uso de partial function, criando uma função com um argumento fixo, o static, passando a receber só um parametro

             if(images.includes(k) && k === 'highResImage' && v) { 
                 return parsePreview(v, 1800) // chamando a partial function
                } 
                
            if(images.includes(k)) {
                if(_.isArray(v)) {
                    return  _.map(v, c => {
                            if(c.image) {
                                c.image = parsePreview(c.image, 500) // chamando a partial function
                            }
                            return c;
                    })
                }
                if(k !== 'highResImage') { return parsePreview(v, 500) } // chamando a partial function
            }

            if(documents.includes(k) && v) {
                return parseStatic(v) // chamando a partial function
            }

            //make sure to return false for those properties that were untouched
            if(documents.includes(k) || images.includes(k) !== -1)
            {
                return false
            }

            //make sure to return all other values untouched
            return v
        });
    }