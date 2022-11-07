export const ComponentRender = function (env) {
  this.tags = ['component'];

  this.parse = function (parser, nodes, lexer) {
    const token = parser.nextToken();
    const args = parser.parseSignature(null, true);
    parser.advanceAfterBlockEnd(token.value);
    return new nodes.CallExtension(this, 'run', args);
  };

  this.run = function (context, comp) {
    env.opts.autoescape = false;
    const data = comp.fields;
    console.log(data);
    let rendered = '';
    try {
      rendered = env.render(
        `${__dirname}/../../views/partials/${comp.contentType}.njk`,
        data,
      );
    } catch (e) {
      console.error(e);
    }
    return rendered;
  };
};
