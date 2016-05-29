import * as React from 'react';
import './file-explorer-styles';


export class FileExplorer extends React.Component<any,any>{
    render(){
        return getUL(this.props.fileModel);
    }
}

const getUL = (list:any[]) => {
    return (
        <ul>
            {
                list.map(item=>{
                    return (
                        <li
                            key={item.id}
                            className="open"
                            onClick={()=>item.open=!item.open}
                        >
                            {item.id.substring(item.id.lastIndexOf('/')+1)}
                            {item.children?getUL(item.children):null}
                        </li>
                    );
                })
            }
        </ul>
    );
};

export const getFileModel = (filePaths:string[]) => {
    const fileModel = [];
    let pathBits:string[] = [];
    let childNode = null;
    let currentNode = null;
    let id = '';
    filePaths.forEach(filePath=>{
        pathBits = filePath.split('/');
        for(let index=0;index<pathBits.length;index++){
            if(index===0){
                id = pathBits[index];
                currentNode = fileModel.filter(node=>node.id===id)[0];
                if(!currentNode){
                    fileModel.push({id});
                    currentNode = fileModel[fileModel.length-1];
                }
            }else{
                if(!currentNode.children){
                    currentNode.children = [];
                }
                id = pathBits.slice(0,index+1).join('/');
                childNode = currentNode.children.filter(node=>node.id===id)[0];
                if(!childNode){
                    currentNode.children.push({id});
                    currentNode = currentNode.children[currentNode.children.length-1];
                }else{
                    currentNode = childNode;
                }
            }
        }
    });
    return fileModel;
}