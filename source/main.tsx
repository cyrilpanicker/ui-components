import * as React  from 'react'; 
import * as ReactDOM from 'react-dom';
import {FileExplorer,getFileModel} from './file-explorer/file-explorer';
import {CodeBox} from './code-box/code-box';
import * as $ from 'jquery';
// import './reset';

const filePaths = [
    '.gitignore',
    'README.md',
    'package.json',
    'server-config.json',
    'source/code-box/code-box.tsx',
    'source/demo/demo-folder/demo-file.js',
    'source/code-box/codemirror-overrides.scss',
    'source/demo/demo-style.scss',
    'source/demo/demo.tsx',
    'source/index.html',
    'source/main.tsx',
    'tsconfig.json',
    'typings.json',
    'webpack.config.js'
];

const fileModel = getFileModel(filePaths);

ReactDOM.render(<FileExplorer fileModel={fileModel} className="server" />,document.getElementById('mount'))