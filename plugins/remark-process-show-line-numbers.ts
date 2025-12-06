import { visit } from 'unist-util-visit';

/**
 * Plugin remark para detectar showLineNumbers na metastring
 * Marca o nó com uma propriedade data para preservar a flag
 */
export function remarkProcessShowLineNumbers() {
  return (tree) => {
    visit(tree, 'code', (node) => {
      if (node.meta?.includes('showLineNumbers=true')) {
        // Armazenar a flag nos dados do nó
        node.data = node.data || {};
        node.data.hProperties = node.data.hProperties || {};
        node.data.hProperties['data-show-line-numbers'] = true;
      }
    });
  };
}
