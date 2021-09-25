module.exports = {
  '*.{js,jsx,ts,tsx,vue}': ['prettier --write', 'eslint --fix --ext .js', 'git add .']
}
