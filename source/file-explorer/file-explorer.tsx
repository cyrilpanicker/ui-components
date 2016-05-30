import * as React from 'react';
import * as $ from 'jquery';
import './file-explorer-styles';

class FileListItem extends React.Component<any,any> {
    onEvent(item,event:Event){
        this.props.onEvent(item,event);
        event.stopPropagation();
    }
    render(){
        const {item} = this.props;
        const {id,children} = item;
        const type = item.children?'folder':'';
        const expanded = (item.children && item.expanded)?'expanded':'';
        let className = `${type} ${expanded}`;
        className = className !== ' ' ? className : '';
        return (
            <li
                className={className}
                onClick={this.onEvent.bind(this,item)}
            >
                {id.substring(id.lastIndexOf('/')+1)}
                {children && <FileList items={children} onEvent={this.onEvent.bind(this)} />}
            </li>
        );
    }
}

class FileList extends React.Component<any,any>{
    render(){
        const {items,onEvent} = this.props;
        return (
            <ul className='list'>
                {items.map(item => <FileListItem key={item.id} item={item} onEvent={onEvent}/>)}
            </ul>
        );
    }
}


export class FileExplorer extends React.Component<any,any>{
    constructor(){
        super();
        this.state = {};
    }
    componentDidMount(){
        this.setState($.extend(this.state,{
            fileModel:this.props.fileModel
        }))
    }
    onEvent(item,event:Event){
        switch(event.type){
            case 'click':
                if(item.children){
                    item.expanded = !item.expanded;
                }
        }
        this.setState(this.state);
    }
    render(){
        const {fileModel,className,title} = this.props;
        return (
            <div className={(className?className+'-':'')+'file-explorer'} >
                {title && <div className="title">{title}</div>}
                <FileList items={fileModel} onEvent={this.onEvent.bind(this)} />
            </div>
        );
    }
}

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