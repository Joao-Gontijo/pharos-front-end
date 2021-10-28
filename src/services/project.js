import { http } from "./config"


export default {
    listar:()=>{
        return http.get('projects');
    },

    salvar:(project) =>{

        return http.post('projects', project);
    },

    atualizar:(project) => {

        return http.put('projects', project);
    },

    apagar:(projectId) => {
        return http.delete('projects',{data:projectId});
    }

    
}