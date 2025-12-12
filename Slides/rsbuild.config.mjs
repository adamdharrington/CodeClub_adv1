// @ts-check
import { defineConfig, rspack } from '@rsbuild/core';
import {globSync} from 'node:fs'

/** @type {import('@rsbuild/core').RsbuildEntry} */
const entries = {
}
const slides = globSync('./src/*/index.js').sort();

slides.forEach((path, index) => {
    const dirMatch = path.match(/src\/(.*?)\/index\.js/)
    if (dirMatch?.[1]) {
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
    server: {
        base: '/CodeClub_adv1',
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
                    patterns: [{ from: 'public' }, { from: 'src/index', to: '.' }],
                })
            ]
        }
    }
});
