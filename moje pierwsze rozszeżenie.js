class Testowe {
  getInfo() {
    return {
      id: 'Test',
      name: 'TestBlocks',
      blocks: [
        {
          opcode: 'GetAppDataPath',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Path To %appdata%'
        }
      ]
    };
  }

  GetAppDataPath() {
    const appDataPath = process.env.APPDATA;
    return appDataPath || 'Unable to get %appdata% path';
  }
}

Scratch.extensions.register(new Testowe());
