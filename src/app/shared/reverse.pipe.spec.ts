import { ReversePipe } from "app/shared/reverse.pipe";
// THIS IS A ISOLATED TESTE, TO MAKE A NON- ISOLATED TEST I COUDL CREATE A TEST USING THIS PIPE AS A DEPENCY OF USER COMPONENT FOR INSTANCE
describe('Pipe', () => {
  it('should create the app', () => {
    let reversePipe = new ReversePipe();
    expect(reversePipe.transform('hello')).toEqual('olleh');
  })
})