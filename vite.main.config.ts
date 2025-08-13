import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

export default defineConfig({
    build: {
    target: 'node16',
    outDir: '.vite/build',
    lib: {
        entry: path.resolve(__dirname, 'src/main.ts'),
        formats: ['cjs'],
        fileName: () => 'main.js',
    },
    rollupOptions: {
        external: [
        'league-connect',
        'ws',
        'bufferutil',
        'utf-8-validate',
        // plus any other built‑ins you use:
        'child_process',
        'fs',
        'path'
        ],
        output: {
        entryFileNames: '[name].js',
        },
    },
    },

    plugins: [
        react({ include: /\.(js|jsx|ts|tsx)$/ }),
    ],
});
