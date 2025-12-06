import { visit } from 'unist-util-visit';

/**
 * Plugin rehype para adicionar data-line-numbers quando flag está presente
 * Procura por elementos pre com data-show-line-numbers e adiciona o atributo
 * data-line-numbers ao elemento code para ativar a numeração de linhas
 */
export function rehypeAddLineNumbers() {
  return (tree) => {
    visit(tree, 'element', (node) => {
      // Procurar por pre com data-show-line-numbers (adicionado pelo remark)
      if (
        node.tagName === 'pre' &&
        node.properties?.['data-show-line-numbers']
      ) {
        const codeElement = node.children?.find(
          (child) => child.tagName === 'code'
        );
        if (codeElement) {
          codeElement.properties = codeElement.properties || {};
          codeElement.properties['data-line-numbers'] = true;
          const lineCount =
            codeElement.children?.filter((c) =>
              c.properties?.className?.includes('line')
            ).length || 0;
          if (lineCount > 0) {
            codeElement.properties['data-line-numbers-max-digits'] =
              String(lineCount).length;
          }
        }
      }
    });
  };
}
