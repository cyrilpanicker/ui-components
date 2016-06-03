import * as React from 'react';
import * as $ from 'jquery';
// import './context-menu-styles';

// export class ContextMenuTarget extends React.Component<any,any> {
//     static defaultState = {
//         displayMenu:false,
//         menuPosition:{x:0,y:0}
//     };
//     constructor(){
//         super();
//         this.state = ContextMenuTarget.defaultState;
//     }
//     onMouseEvent(event:MouseEvent){
//         switch(event.type){
//             case 'contextmenu':
//                 event.preventDefault();
//                 this.setState({
//                     displayMenu:true,
//                     menuPosition:{x:event.pageX,y:event.pageY}
//                 });
//                 break;
//             default:
//                 this.setState(ContextMenuTarget.defaultState);
//         }
//     }
//     render(){
//         let {className,menuItems,children} = this.props;
//         className = className?className+' '+'context-menu-target':'context-menu-target';
//         const {displayMenu,menuPosition} = this.state;
//         return (
//             <span className={className} 
//                 onClick={this.onMouseEvent.bind(this)}
//                 onContextMenu={this.onMouseEvent.bind(this)}
//             >
//                 {children}
//                 <ContextMenu displayMenu={displayMenu} menuPosition={menuPosition} menuItems={menuItems} />
//             </span>
//         );
//     }
// }

export class ContextMenu extends React.Component<any,any>{

    defaultStyles = {
        backgroundColor:'white',
        width:'300px',
        display:'none',
        position:'absolute'
    };

    render(){

        const {displayMenu,menuPosition,menuItems,onMenuItemSelect} = this.props;
        
        const styles = $.extend({},this.defaultStyles,{
            display:displayMenu?'block':'none',
            top:menuPosition.y,
            left:menuPosition.x
        });
        
        return (
            <ul style={styles} className='context-menu' >
            {
                menuItems.map(item=>{
                    return (
                        <li
                            key={item.id}
                            onClick={onMenuItemSelect.bind(null,item.id)}
                        >
                            {item.name}
                        </li>
                    );
                })
            }
            </ul>
        );

    }
}