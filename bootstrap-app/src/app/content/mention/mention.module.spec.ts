import { MentionModule } from './mention.module';

describe('MentionModule', () => {
  let mentionModule: MentionModule;

  beforeEach(() => {
    mentionModule = new MentionModule();
  });

  it('should create an instance', () => {
    expect(mentionModule).toBeTruthy();
  });
});
