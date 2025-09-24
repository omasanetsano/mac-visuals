import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      'vaul@1.1.2': 'vaul',
      'sonner@2.0.3': 'sonner',
      'recharts@2.15.2': 'recharts',
      'react-resizable-panels@2.1.7': 'react-resizable-panels',
      'react-hook-form@7.55.0': 'react-hook-form',
      'react-day-picker@8.10.1': 'react-day-picker',
      'next-themes@0.4.6': 'next-themes',
      'lucide-react@0.487.0': 'lucide-react',
      'input-otp@1.4.2': 'input-otp',
      'figma:asset/d13d14c728c7291adb45063b7fbcbfc655c566ac.png': path.resolve(__dirname, './src/assets/d13d14c728c7291adb45063b7fbcbfc655c566ac.png'),
      'figma:asset/cd3344623dccdc88b220146f09250a5a36381148.png': path.resolve(__dirname, './src/assets/cd3344623dccdc88b220146f09250a5a36381148.png'),
      'figma:asset/c2b893049bd9edd7b3e55b9c49368f098700d682.png': path.resolve(__dirname, './src/assets/c2b893049bd9edd7b3e55b9c49368f098700d682.png'),
      'figma:asset/c0b905c0305a1e9d34d45b66632685257571ac6e.png': path.resolve(__dirname, './src/assets/c0b905c0305a1e9d34d45b66632685257571ac6e.png'),
      'figma:asset/b25725c2d9fe3e83e8e8b5a7eceb73fde424a4a3.png': path.resolve(__dirname, './src/assets/b25725c2d9fe3e83e8e8b5a7eceb73fde424a4a3.png'),
      'figma:asset/8119fe6589a7b09516ed134f085e44d25eec7f7b.png': path.resolve(__dirname, './src/assets/8119fe6589a7b09516ed134f085e44d25eec7f7b.png'),
      'figma:asset/7b33aa6cafdf99181db2cd20f9f3547480e76fcc.png': path.resolve(__dirname, './src/assets/7b33aa6cafdf99181db2cd20f9f3547480e76fcc.png'),
      'figma:asset/7307ff073879b7e11e74dbb7adae056b6f60a7be.png': path.resolve(__dirname, './src/assets/7307ff073879b7e11e74dbb7adae056b6f60a7be.png'),
      'figma:asset/5cd2c6568861113efef088165ee4352afe284d03.png': path.resolve(__dirname, './src/assets/5cd2c6568861113efef088165ee4352afe284d03.png'),
      'embla-carousel-react@8.6.0': 'embla-carousel-react',
      'cmdk@1.1.1': 'cmdk',
      'class-variance-authority@0.7.1': 'class-variance-authority',
      '@radix-ui/react-tooltip@1.1.8': '@radix-ui/react-tooltip',
      '@radix-ui/react-toggle@1.1.2': '@radix-ui/react-toggle',
      '@radix-ui/react-toggle-group@1.1.2': '@radix-ui/react-toggle-group',
      '@radix-ui/react-tabs@1.1.3': '@radix-ui/react-tabs',
      '@radix-ui/react-switch@1.1.3': '@radix-ui/react-switch',
      '@radix-ui/react-slot@1.1.2': '@radix-ui/react-slot',
      '@radix-ui/react-slider@1.2.3': '@radix-ui/react-slider',
      '@radix-ui/react-separator@1.1.2': '@radix-ui/react-separator',
      '@radix-ui/react-select@2.1.6': '@radix-ui/react-select',
      '@radix-ui/react-scroll-area@1.2.3': '@radix-ui/react-scroll-area',
      '@radix-ui/react-radio-group@1.2.3': '@radix-ui/react-radio-group',
      '@radix-ui/react-progress@1.1.2': '@radix-ui/react-progress',
      '@radix-ui/react-popover@1.1.6': '@radix-ui/react-popover',
      '@radix-ui/react-navigation-menu@1.2.5': '@radix-ui/react-navigation-menu',
      '@radix-ui/react-menubar@1.1.6': '@radix-ui/react-menubar',
      '@radix-ui/react-label@2.1.2': '@radix-ui/react-label',
      '@radix-ui/react-hover-card@1.1.6': '@radix-ui/react-hover-card',
      '@radix-ui/react-dropdown-menu@2.1.6': '@radix-ui/react-dropdown-menu',
      '@radix-ui/react-dialog@1.1.6': '@radix-ui/react-dialog',
      '@radix-ui/react-context-menu@2.2.6': '@radix-ui/react-context-menu',
      '@radix-ui/react-collapsible@1.1.3': '@radix-ui/react-collapsible',
      '@radix-ui/react-checkbox@1.1.4': '@radix-ui/react-checkbox',
      '@radix-ui/react-avatar@1.1.3': '@radix-ui/react-avatar',
      '@radix-ui/react-aspect-ratio@1.1.2': '@radix-ui/react-aspect-ratio',
      '@radix-ui/react-alert-dialog@1.1.6': '@radix-ui/react-alert-dialog',
      '@radix-ui/react-accordion@1.2.3': '@radix-ui/react-accordion',
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    target: 'esnext',
    outDir: 'build',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          ui: ['lucide-react'],
          motion: ['motion'],
        },
      },
    },
    chunkSizeWarningLimit: 1500,
    cssCodeSplit: true,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug'],
      },
      mangle: true,
      format: {
        comments: false,
      },
    },
  },
  server: {
    port: 3000,
    open: true,
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'motion', 'lucide-react'],
  },
  // Additional performance optimizations
  esbuild: {
    drop: ['console', 'debugger'],
  },
  css: {
    devSourcemap: false,
  },
});