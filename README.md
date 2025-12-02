# inventory-manager
Para criar as imagens
  - docker-compose up -d --build

Para subir o backend
  - docker exec -it node_inventory_manager sh
  - está dentro do container e pode rodar no terminal normalmente
  - npm run dev
      
Para subir o frontend
  - docker exec -it react_inventory_manager sh
  - está dentro do container e pode rodar no terminal normalmente
  - npm run dev

http://localhost:8080/api/

SEM O DOCKER COMPOSE
- Não precisa dos comandos abaixo em razão do docker-compose, mas, por curiosidade
  - Subindo o backend:
    - criando imagem: docker build -t henriqueannicchino/node:latest .
    - docker run -it --name node_inventory_manager --network nodenet -v $(pwd -W):/app -p 5000:5000 henriqueannicchino/node:latest sh
    - npm run dev
      - OBS: desse jeito, vai estar lento, pois estamos mapeando o node modules no volume

  - Subindo o frontend:
    - criando imagem: docker build -t henriqueannicchino/react:latest .
    - docker run -it --name react_inventory_manager --network nodenet -v $(pwd -W):/app -p 5173:5173 henriqueannicchino/react:latest sh
    - npm run dev -- --host 0.0.0.0
      - OBS: desse jeito, vai estar lento, pois estamos mapeando o node modules no volume

