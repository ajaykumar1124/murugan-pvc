import { preview } from 'vite';

const port = Number.parseInt(process.env.PORT || '4173', 10);

const server = await preview({
  preview: {
    host: '0.0.0.0',
    port,
    strictPort: true,
  },
});

server.printUrls();