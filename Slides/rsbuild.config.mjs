// @ts-check
import { defineConfig, rspack } from '@rsbuild/core';
import {globSync} from 'node:fs'

/** @type {import('@rsbuild/core').RsbuildEntry} */
const entries = {}
globSync('./src/*/index.js').sort().forEach((path, index) => {
    const dirMatch = path.match(/src\/(.*?)\/index\.js/)
    if (dirMatch?.[1]) {
        if(index === 0) {
            entries['index'] = `./${path}`;
        }
        entries[dirMatch[1]] = `./${path}`;
    }
});

export default defineConfig({
    source: {
        entry: entries
    },
    output: {
        distPath: {
            root: 'docs',
        }
    },
    tools: {
        rspack: {
            module: {
                rules: [
                {
                    test: /\.md$/,
                    type: 'asset/source'
                },
                '...'
                ]
            },
            plugins: [
                new rspack.CopyRspackPlugin({
                    patterns: [{ from: 'public' }]
                })
            ]
        }
    }
});
