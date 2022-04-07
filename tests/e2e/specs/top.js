// https://docs.cypress.io/api/introduction/api.html

describe("TOPページの表示", () => {
  it("TOPページが表示されるか", () => {
    cy.visit("/");
    cy.contains("p", "エリアを選択");
    cy.contains("p", "モデルハウスを選択");
    cy.contains("p", "ご来場日時を選択");
  });

  it("中部関西エリアをクリックしたら表示が切り替わるか", () => {
    cy.get("table").contains("td", "中部・関西エリア").should("be.visible");
    cy.get("table").contains("td", "中部・関西エリア").click();
    cy.contains("td", "浜松モデルハウス");
    cy.contains("td", "梅田モデルハウス");
  });

  it("東京エリアをクリックしたら表示が切り替わるか", () => {
    cy.get("table").contains("td", "東京エリア").should("be.visible");
    cy.get("table").contains("td", "東京エリア").click();
    cy.contains("td", "青山一丁目モデルハウス");
    cy.contains("td", "渋谷モデルハウス");
    cy.contains("td", "赤坂モデルハウス");
  });

  it("カレンダーをクリックしたら画面遷移されるか", () => {
    cy.get("table").contains("span", "○").should("be.visible");
    cy.get("table").contains("span", "○").click({ force: true });
    cy.url().should("eq", "http://localhost:8081/Form");
  });
});
