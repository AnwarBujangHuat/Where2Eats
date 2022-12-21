import TestIds from "./TestIDs";

describe('OpenMenu', () => {
  beforeAll(async () => {
    await device.launchApp();
  });
  it('Successfully go To new Restaurant', async () => {
    await element(by.id(TestIds.BtnMenu)).tap();

    await expect(element(by.text('Register New Restaurant'))).toBeVisible();
    await element(by.text('Register New Restaurant')).tap();
  });

});
