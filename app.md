# Nome do App
podcast manager

### Descrição
Um app com o estilo da netflix que tenha o poder de centralizar os podcasts divididos por categorias


### Dominio
podcast feitos em video

## Como

### Features(funcionalidades)
-Listar podcasts em categorias
  -Saúde, Fitness, MindSet, Humor
Filtro de podcasts por nome

### Como vou implementar

GET: retorna lista de episodios
response

### Implementação
- Retornar um api rest com Nome do podcast, Nome episódio, Imagem de capa e link 
  '''js
  {
    podcastName: "Flow",
    episode: "TECNOLOGIA E IA [+ FABIO AKITA]",
    cover: "https://i.ytimg.com/vi/--slRywdonM/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLB3x3pSwqDkVj9ZidjSe1kHAgCQ_A",
    link: "https://www.youtube.com/watch?v=--slRywdonM"
    category: "MindSet",
  }
  '''