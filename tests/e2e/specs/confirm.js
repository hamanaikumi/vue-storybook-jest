describe("予約内容確認ページ", () => {
  it("予約内容が正しく表示されるか（日時は変わるのでチェックしない）", () => {
    //    TOP
    cy.visit("/");
    cy.get("table").contains("td", "中部・関西エリア").click();
    cy.get("table").contains("td", "梅田モデルハウス").click();
    cy.get("table").contains("span", "○").click({ force: true });
    // Form
    cy.get("div.name-wrapper").children("input").type("予約太郎");

    cy.get("div.furigana-wrapper").children("input").type("ヨヤクタロウ");

    cy.get("div.email-wrapper")
      .children("input")
      .type("sweden@swedenhouse.co.jp");

    cy.get("div.phone-wrapper").children("input").type("0123456789");

    cy.get("div.city-wrapper")
      .children("input")
      .type("横浜市港南区", { force: true });

    cy.get("div.guest-wrapper")
      .children("input")
      .type("大人2名 子供2名", { force: true });

    cy.get("div.prefecture-wrapper")
      .children("div.select-wrapper")
      .children("select")
      .select("神奈川県", { force: true });

    cy.get("div.contact-wrapper")
      .children("div.select-wrapper")
      .children("select")
      .select("メール", { force: true });

    cy.get("div.concent-wrapper")
      .children("div.radio-wrapper")
      .children("label.radio")
      .click({ force: true }, setTimeout(3000));

    cy.contains("次へ進む").click({ force: true });
    cy.url().should("eq", "http://localhost:8081/Confirm");

    // Confirm
    cy.get("div.confirm-content")
      .contains("中部・関西エリア")
      .should("be.visible");

    cy.get("div.confirm-content")
      .contains("梅田モデルハウス")
      .should("be.visible");

    cy.get("div.confirm-content").contains("予約太郎").should("be.visible");

    cy.get("div.confirm-content").contains("ヨヤクタロウ").should("be.visible");

    cy.get("div.confirm-content")
      .contains("sweden@swedenhouse.co.jp")
      .should("be.visible");

    cy.get("div.confirm-content").contains("0123456789").should("be.visible");

    cy.get("div.confirm-content").contains("横浜市港南区").should("be.visible");

    cy.get("div.confirm-content")
      .contains("大人2名 子供2名")
      .should("be.visible");

    cy.get("div.confirm-content").contains("神奈川県").should("be.visible");

    cy.get("div.confirm-content").contains("メール").should("be.visible");
  });
});
