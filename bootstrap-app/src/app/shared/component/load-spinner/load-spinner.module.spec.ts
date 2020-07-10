import { LoadSpinnerModule } from './load-spinner.module';

describe('LoadSpinnerModule', () => {
  let loadSpinnerModule: LoadSpinnerModule;

  beforeEach(() => {
    loadSpinnerModule = new LoadSpinnerModule();
  });

  it('should create an instance', () => {
    expect(loadSpinnerModule).toBeTruthy();
  });
});
