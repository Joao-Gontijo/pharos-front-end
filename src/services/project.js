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

    apagar:(project) => {
        return http.delete('projects',{data:project});
    }

    
}