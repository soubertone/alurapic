<template>
    <div>

        <button type="button" class="btn btn-block my-3" :class="verifyType" @click="confirm()">
            {{ text }}
        </button>
        
    </div>
</template>

<script>
export default {
    props: {

        type: {
            type: String,
        },

        text: {
            type: String,
        }
    },
    
    methods: {
        confirm () {
            if(confirm("Confirmar operação")) {
                this.$emit('responseConfirm');
            }
        }
    },

    computed: {

        verifyType () {

            if(this.type == 'danger') return 'btn-outline-danger';
            if(this.type == 'primary') return 'btn-outline-primary';
            
            return 'btn-outline-info';

        }
    },
    
}
</script>

<style scoped>

</style>