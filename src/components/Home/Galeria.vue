<template>
  <div>
      <h1 class="jumbotron">Galeria</h1>

    <div class="row d-flex justify-content-center">

      <div class="col-12 mx-2 px-5 d-flex justify-content-end">

        <div class="input-group px-5 mb-2">

            <div class="input-group-prepend">
              <div class="input-group-text">
                <i class="bi bi-search"></i>
              </div>
            </div>

          <input type="search" class="form-control" v-model="filter" id="filter" placeholder="Filtre por titulo">
        </div>

      </div>

        <div class="col-12 col-md-3 px-2 m-3" v-for="(foto, index) in filtrarPorTitulo" v-bind:key="foto.title">
            <div class="card bg-light d-flex justify-content-center align-items-center h-100">
                <div class="card-body bg-light rounded">

                    <h4 class="card-title">
                      <button class="btn btn-light text-dark btn-block btn-lg" @click="openModal(foto)" data-toggle="modal" data-target="#modelId">
                        {{ foto.titulo }}
                      </button>
                    </h4>

                    <p class="card-text">
                        <img :src="foto.url" class="img-fluid rounded" :alt="foto.titulo">
                    </p>

                    <Button @responseConfirm="deletar(index)" text="Deletar" type="danger" />

                    <router-link :to="{ name: 'Alterar', params: { id: foto._id } }">
                      <button type="button" class="btn btn-block my-3 btn-outline-primary">
                          Alterar
                      </button>
                    </router-link>

                </div>
            </div>
        </div>

        <!-- Modal -->
        <div class="modal fade" id="modelId" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">{{ modal.titulo }}</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
              </div>
              <div class="modal-body">
                <div class="row">
                  <div class="col-12">

                    <div class="card">

                      <div class="card-body p-2">

                          <img :src="modal.url" class="img-fluid">

                          <hr>

                          <p class="h6 p-2 text-justify">
                            {{ modal.descricao }}
                          </p>

                      </div>

                    </div>

                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>

    </div>
      

  </div>
</template>

<script>
import _axios from "@/plugins/axios";
import Button from "@/components/Button.vue";

export default {
  name: 'HelloWorld',
  components: {
    Button,
  },
  
  data() {
      return {
          fotos: [],
          filter: null,
          modal: {}
      }
  },

  methods: {
    
    async deletar(index) {
      await _axios
        .delete("v1/fotos/"+this.fotos[index]._id)
          .then(response => {
            console.log(response.data);
          })
          .catch(err => {
            console.log(err)
          });

      this.fotos.splice(index, 1);
    },

    openModal(foto) {
      this.modal = foto;
    }

  },

  computed: {

    filtrarPorTitulo() {
      if(this.filter) {
        let exp = new RegExp(this.filter.trim(), 'i'); //RegExp = Regular Expression
        return this.fotos.filter(foto => exp.test(foto.titulo));
      } else {
        return this.fotos;
      }
    },

  },

  created() {
      _axios
        .get("v1/fotos")
        .then(response => {
            this.fotos = response.data;
        });
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.row {
  margin-left: 0;
  margin-right: 0;
}

img {
  max-height: 200px;
}

#filter {
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-size: 16px;
}
</style>
