import { ReversePipe } from "app/shared/reverse.pipe";
// THIS IS A ISOLATED TEST(it has no depedency except for itself)
describe('Pipe: ReversePipe', () => {
  it('should create the app', () => {
    let reversePipe = new ReversePipe();
    expect(reversePipe.transform('hello')).toEqual('olleh');
  })
})