module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', ['feat', 'bugfix', 'update', 'refactor', 'docs', 'style', 'test', 'build']],
    'type-case': [0], // 提交类型不要求大小写
    'scope-case': [0], // 作用域不要求大小写
    'scope-empty': [2, 'never'], // 强制要求<Header>的作用域不能为空
    'type-empty': [2, 'never'], // 强制要求<Header>的提交类型不能为空
    'body-min-length': [2, 'always', 1], // 强制要求commit message的<Body>不能为空
  },
};
