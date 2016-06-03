import * as React  from 'react'; 
import * as ReactDOM from 'react-dom';
import {FileExplorer,getFileModel} from './file-explorer/file-explorer';
import {CodeBox} from './code-box/code-box';
import {DemoComponent} from './demo/demo';
import {ContextMenuDemo} from './context-menu/context-menu-demo';
import * as $ from 'jquery';
import './reset';

const filePaths = [
    ".gitignore",
    "README.md",
    "package.json",
    "source/code-box/code-box.tsx",
    "source/code-box/codemirror-overrides.scss",
    "source/demo/demo-folder/demo-file.js",
    "source/demo/demo-style.scss",
    "source/demo/demo.tsx",
    "source/file-explorer/file-explorer-styles.scss",
    "source/file-explorer/file-explorer.tsx",
    "source/index.html",
    "source/main.tsx",
    "source/reset.scss",
    "tsconfig.json",
    "typings.json",
    "webpack.config.js"
]

const fileModel = getFileModel(filePaths);

// ReactDOM.render(<DemoComponent/>,document.getElementById('mount'));
// ReactDOM.render(<CodeBox/>,document.getElementById('mount'));
// ReactDOM.render(<FileExplorer fileModel={fileModel} className="server" />,document.getElementById('mount'));
ReactDOM.render(<ContextMenuDemo/>,document.getElementById('mount'));