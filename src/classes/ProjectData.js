

class ProjectData {
    constructor() {
        this.main = "";
        this.icon = "";
        this.content = [];
    }
    
    setMain(source){
        this.main = source;
    }
    
    setIcon(source){
        this.icon = source;
    }
    
    addContent(
        data, 
        type, 
        author = '', 
        title = '', 
        keys = []
    ) {
        this.content.push({data, type, author, title, keys})
    }
}

export default ProjectData;