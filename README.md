# TDC SP 2019
## Server-Side Rendering e Universal Apps com com Vue.js e Nuxt.js

> API para demonstração de Server-Side Rendering e Universal Apps com Vue.js e Nuxt.js, criada como material de apoio para _talk_ nas trilhas [JavaScript](http://www.thedevelopersconference.com.br/tdc/2019/saopaulo/trilha-javascript) e [JavaScript II](http://www.thedevelopersconference.com.br/tdc/2019/saopaulo/trilha-javascript-2) do [TDC SP 2019](http://www.thedevelopersconference.com.br/tdc/2019/saopaulo/trilhas).

### Instruções

``` bash
# instalar dependências
$ npm install

# iniciar em localhost:8080
$ npm start

# publicar e executar no Google Cloud
$ gcloud app deploy
$ gcloud app browse
```

### Rotas

- `GET` `'/tasks'`: Recupera todas as tarefas cadastradas.
- `GET` `'/tasks/:id'`: Recupera a tarefa com o `id` especificado na URL.
- `POST` `'/tasks'`: Armazena a tarefa conforme o JSON enviado como _payload_.
- `PUT` `'/tasks/:id'`: Armazena a tarefa conforme o JSON enviado como _payload_, mesclando à tarefa com o `id` especificado na URL.
- `DELETE` `'/tasks/:id'`: Remove definitivamente a tarefa com o `id` especificado na URL.

Para explicações detalhadas sobre como as coisas funcionam, dê uma olhada na [documentação do Google Cloud App Engine](https://cloud.google.com/appengine/docs/nodejs/).

**Ainda está com alguma dúvida?** Participe das [comunidades Vue.js Brasil](https://github.com/vuejs-br/comunidades) e procupre pelo autor desta _talk_ ou outros experientes apoiadores do [Vue.js](https://br.vuejs.org/) em nosso país.
