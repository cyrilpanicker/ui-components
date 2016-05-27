import * as React from 'react';
import * as $ from 'jquery';
import * as CodeMirror from 'codemirror';

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/monokai.css';
import 'codemirror/mode/javascript/javascript';

const defaultOptions = {
    mode:'javascript',
    lineNumbers:true,
    theme:'monokai'
};

export class CodeBox extends React.Component<any,any> {
    
    node:HTMLElement = null;
    wrapperNode:CodeMirror.Editor = null;
    
    initializeNode(node:HTMLElement){
        this.node = node
    }
    
    componentDidMount(){
        const options = $.extend({},defaultOptions,this.props.options);
        this.wrapperNode = CodeMirror(this.node,options);
    }
    
    render(){
        return (
            <div
                className={'codebox'+this.props.className?'-'+this.props.className:''}
                ref={this.initializeNode.bind(this)}
            >
            </div>
        );
    }
}