import TestIds from './TestIDs';
describe('LoginPage', () => {
  beforeAll(async () => {
    await device.launchApp();
  });
  it('Unsuccessful Login with correct Inputted Credentials', async () => {
    await element(by.id(TestIds.IFEmail)).clearText();
    await element(by.id(TestIds.IFEmail)).typeText('anwarbinbujang@gmail.com');

    await element(by.id(TestIds.IFPassword)).clearText();
    await element(by.id(TestIds.IFPassword)).typeText('123456789');

    await element(by.id(TestIds.BtnDone)).tap();

    await expect(element(by.text('Sorry'))).toBeVisible();
    await element(by.text('Okay')).tap();
  });

  it('successful Login with correct Inputted Credentials', async () => {
    await element(by.id(TestIds.IFEmail)).clearText();
    await element(by.id(TestIds.IFEmail)).typeText('A177016@siswa.ukm.edu.my');

    await element(by.id(TestIds.IFPassword)).clearText();
    await element(by.id(TestIds.IFPassword)).typeText('123456');

    await element(by.id(TestIds.BtnDone)).tap();
  });
});
describe('RememberMe', () => {
  beforeAll(async () => {
    await device.launchApp();
  });
  beforeEach(async () => {
    await device.reloadReactNative();
  });
  it('successful Login and Store Credentials', async () => {
    await element(by.id(TestIds.IFEmail)).clearText();
    await element(by.id(TestIds.IFEmail)).typeText('A177016@siswa.ukm.edu.my');
    await element(by.id(TestIds.IFPassword)).clearText();
    await element(by.id(TestIds.IFPassword)).typeText('123456');
    await element(by.id(TestIds.BtnDone)).tap();
    // await waitFor(element(by.id(TestIds.Home))).toBeVisible().withTimeout(200);
  });
  it('successful Login with Stored Credentials', async () => {
    await element(by.id(TestIds.BtnDone)).tap();
    // await expect(element(by.id(TestIds.Home))).toBeVisible();
  });
  it('clear Credentials', async () => {
    await element(by.id(TestIds.BtnRememberMe)).tap();
    await element(by.id(TestIds.BtnDone)).tap();
  });
  it('clear', async () => {});
});
