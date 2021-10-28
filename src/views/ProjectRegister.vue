<template>
    <div class="container is-fluid">
        <nav class="">
          <div class="columns">
            <div class="column">

              <form @submit="salvar(), listar()">
                <h4 class="mt-4">Project Name</h4>
                <input class="input mt-1" type="text" placeholder="Type Project name here" v-model="project.projectName">
                <h4 class="mt-4">Git Uri</h4>
                <input class="input mt-1" type="text" placeholder="Git URI" v-model="project.gitUri">
                <h4 class="mt-4">Local Path</h4>
                <div class="field has-addons">
                <input class="input mt-1 has-icon-right" type="text" placeholder="Local Path" v-model="project.localPath">
                <button class="button mt-1"><img src="../assets/folder-icon.png" class="image is-24x24"></button>
                </div>
                <h4 class="mt-4">Jira Uri</h4>
                <input class="input mt-1" type="text" placeholder="Type Jira Uri" v-model="project.jiraUri">
                <div class="buttons">
                  <button class="button is-link is-light is-outlined mt-4">
                    <img src="../assets/save-icon.png" class="image is-24x24">
                    Save
                  </button>
                  <button @click="limpar()" class="button is-danger is-light is-outlined mt-4">
                    <img src="../assets/cancel-icon.png" class="image is-24x24">
                    Cancel
                  </button>
                </div>

              </form>
            </div>  
          </div>
        </nav>
        
          <div class="table">
            <table class="table is-hoverable is-bordered mt-6">
              <caption><strong>Projects Registered</strong></caption>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Git Repository</th>
                  <th>Jira Repository</th>
                  <th>Editar</th>
                  <th>Excluir</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="project in projects" :key="project.id">
                  <td>{{ project.projectName }}</td>
                  <td>{{ project.gitUri }}</td>
                  <td>{{ project.jiraUri }}</td>
                  <td><button class="button is-info is-light">
                    <img src="../assets/settings-icon.png" class="image is-24x24">
                    </button></td>
                  <td><button class="button is-danger"  @click="remover(project), listar()">
                    <img src="../assets/cancel-icon.png" class="image is-24x24">
                    </button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
</template>

<script>

import Project from '@/services/project'

export default {
    data(){
        return{
        project:{
            id:'',
            projectName:'',
            gitUri: '',
            localPath: '',
            jiraUri: ''
        },
        projects:[]
        }
    },
    mounted(){
        this.listar();
    },
    methods:{
        listar(){
            Project.listar().then(resposta => {
                this.projects = resposta.data;
                console.log(this.projects);
            })
        },
        limpar(){

        },
        salvar(){
          if(!this.project.id){
            Project.salvar(this.project);
            console.log("salvo");
            this.project = {};
          } else {
            Project.atualizar(this.project);
            console.log("atualizado");
          }
          this.listar();
        },
        remover(project){
          Project.apagar(project);
          console.log("apagado");
        }
    }
}
</script>

<style>

</style>
