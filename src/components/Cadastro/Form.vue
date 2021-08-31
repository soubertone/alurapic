<template>
    
   <div class="card">
        <div class="card-title mt-3">

            <span v-if="this.$route.params.id" class="display-4">Alterar Foto</span>
            <span v-else class="display-4">Cadastrar Foto</span>

        </div>

        <hr>

        <div class="card-body d-flex justify-content-center p-3">
            <div class="row">

                <div class="col-12 col-md-6">

                    <div class="card">
                        <div class="card-title h3 my-3">
                            {{ foto.titulo }}
                        </div>

                        <div class="divider"></div>

                        <div class="card-body p-3">

                            <div v-show="foto.url" class="border border-primary">
                                <img class="card-img-top" :src="foto.url" alt="Esperando...">
                            </div>

                            <hr>

                            <small class="card-text">{{ foto.descricao }}</small>
                        </div>

                    </div>

                </div>

                <div class="col-12 col-md-6">

                    <form @submit.prevent="enviarDados">
                        <div class="row">

                            <div class="col-12">
                                <div class="form-group">
                                    <label for="title">Ttulo: </label>
                                    <input type="text" name="title" id="title" v-model="foto.titulo" v-validate data-vv-rules="required" data-vv-as="'Titulo'" maxlength="50" class="form-control" placeholder="Digite o titulo da foto" aria-describedby="titleID" required>
                                    <small v-show="errors.has('title')" class="text-danger">{{ errors.first('title') }}</small>
                                </div>
                            </div>

                            <div class="col-12">
                                <div class="form-group">
                                    <label for="url">URL: </label>
                                    <input type="text" name="url" id="url" v-model="foto.url" v-validate data-vv-rules="required" data-vv-as="'URL'" class="form-control" placeholder="Digite a URL da foto" aria-describedby="urlID" required>
                                    <small v-show="errors.has('url')" class="text-danger">{{ errors.first('url') }}</small>
                                </div>
                            </div>

                            <div class="col-12">
                                <div class="form-group">
                                    <label for="description">Descrição: </label>
                                    <textarea type="text" name="description" id="description" v-model="foto.descricao" v-validate data-vv-rules="required" data-vv-as="'Descrição'" maxlength="200" class="form-control" placeholder="Descrição da foto" aria-describedby="descriptionID"></textarea>
                                    <small v-show="errors.has('description')" class="text-danger">{{ errors.first('description') }}</small>
                                </div>
                            </div>

                            <div class="col-12">
                                <button type="submit" id="enviar" class="btn btn-outline-success btn-lg btn-block">
                                    Enviar
                                </button>

                                <button type="button" id="limpar" @click="limpar" class="btn btn-primary btn-block">
                                    Limpar
                                </button>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import _axios from '@/plugins/axios';

export default {

    data() {
        return {
            foto: {},
            id: this.$route.params.id,
        }
    },

    mounted () { 

        if(this.id) {
            _axios.get('v1/fotos/'+this.id)
                .then(response => {
                    this.foto = response.data;
                })
                .catch(err => {
                    console.log(err);
                });
        }

    },

    methods: {

        enviarDados() {

            if(this.id){
                _axios.put('v1/fotos/'+this.id, this.foto)
                    .then(
                        this.$router.push({ name: 'Home' }) 
                    )
                    .catch(err => {
                        console.log(err);
                        alert('Erro ao tentar se comunicar com a API!')
                    });
            }

            _axios.post('v1/fotos', this.foto)
                .then(response => {
                    console.log(response.data);
                    this.foto = {}
                    alert('Foto inserida com sucesso, confira na galeria!')
                })
                .catch(err => {
                    if(err.request.status === 0) {
                        console.log(err);
                        alert('Erro ao tentar se comunicar com a API!')
                    } else {
                        alert('Dados incorretos!')
                    }
                })
        },

        limpar() {
            this.foto = {}
        }
    },
}
</script>