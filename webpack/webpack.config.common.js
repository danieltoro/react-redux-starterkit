// Configuration
import { rules, extensions, modules } from './configurations';

export default type => ({
  module: {
    rules: rules(type)
  },
  resolve: {
    extensions: extensions(),
    modules: modules()
  }
});
