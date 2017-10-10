// HTML
import html from './html';

export default function clientRender() {
  return (req, res, next) => {

    if (req.isBot) {
      return next();
    }

    const initialState = {
      device: {
        isMobile: req.isMobile
      }
    };
    res.send(html({
      markup: '',
      initialState
    }));
  };
}
