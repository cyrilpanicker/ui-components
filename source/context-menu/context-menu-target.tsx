import * as React from 'react';

export class ContextMenuTarget extends React.Component<any,any>{
    
    onClick(targetId:number,event:MouseEvent){
        this.props.onClick(targetId);
        event.stopPropagation();
    }
    
    onContextMenu(targetId:number,event:MouseEvent){
        this.props.onContextMenu(targetId,{x:event.pageX,y:event.pageY});
        event.preventDefault();
        event.stopPropagation();
    }
    
    render(){
        const {children,targetId,onMouseEvent} = this.props;
        return (
            <span
                className='context-menu-target'
                onClick={this.onClick.bind(this,targetId)}
                onContextMenu={this.onContextMenu.bind(this,targetId)}
            >
                {children}
            </span>
        );
    }
    
}