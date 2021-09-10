module.export = {
  webpack: (config, { isServer }) => {
    //Fixes npm packeges d
    if (!isServer) {
      config.node = {
        fs: 'empty'
      };
    }

    return config;
  }
};
