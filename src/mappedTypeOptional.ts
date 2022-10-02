interface Options {
  width: number;
  height: number;
  color: string;
  label: string;
}

type OptionsUpdate = {
  [k in keyof Options]?: Options[k];
};

class OptionUpdater {
  constructor(private options: Options) {}

  public getCurrentOptions() {
    return {...this.options};
  }

  public updateOptions(newOptions: OptionsUpdate) {
    this.options = {
      ...this.options,
      ...newOptions,
    };
  }
}

const optionUpdater = new OptionUpdater({
  width: 10,
  height: 20,
  color: 'red',
  label: 'partial test',
});

optionUpdater.updateOptions({
  label: 'label is changed',
});

console.log(optionUpdater.getCurrentOptions());
