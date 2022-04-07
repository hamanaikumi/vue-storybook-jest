describe("入力バリデーション", () => {
  it("Formページが表示されるか", () => {
    cy.visit("/Form");
    cy.contains("p", "予約者情報入力");
  });
  it("入力せずに次へ進むボタンを押してエラーメッセージが表示されるか", () => {
    cy.contains("次へ進む").click({ force: true });
    cy.contains("p", "入力内容に不足または誤りがあります。");
    cy.contains("p", "入力項目の赤字部分の内容を再度入力してください。");
    cy.contains("p", "お名前を入力してください。");
    cy.contains("p", "お名前（フリガナ）を入力してください。");
    cy.contains("p", "メールアドレスを入力してください。");
    cy.contains("p", "電話番号を入力してください。");
    cy.contains("p", "市区町村・番地を入力してください。");
    cy.contains("p", "希望連絡方法を選択してください。");
    cy.contains("p", "ご来場人数を入力してください。");
    cy.contains("p", "「お客さまの個人情報の利用目的」をご確認ください。");
  });
  it("入力欄のエラーメッセージが消えるか", () => {
    cy.get("div.name-wrapper").children("input").should("be.visible");
    cy.get("div.name-wrapper").children("input").type("予約太郎");
    cy.get("div.furigana-wrapper").children("input").should("be.visible");
    cy.get("div.furigana-wrapper").children("input").type("ヨヤクタロウ");
    cy.get("div.email-wrapper").children("input").should("be.visible");
    cy.get("div.email-wrapper")
      .children("input")
      .type("sweden@swedenhouse.co.jp");
    cy.get("div.phone-wrapper").children("input").should("be.visible");
    cy.get("div.phone-wrapper").children("input").type("0123456789");
    cy.get("div.city-wrapper").children("input").should("be.visible");
    cy.get("div.city-wrapper")
      .children("input")
      .type("横浜市港南区", { force: true });
    cy.get("div.guest-wrapper").children("input").should("be.visible");
    cy.get("div.guest-wrapper")
      .children("input")
      .type("大人2名 子供2名", { force: true });

    cy.contains("次へ進む").click({ force: true });

    cy.contains("p", "入力内容に不足または誤りがあります。");
    cy.contains("p", "入力項目の赤字部分の内容を再度入力してください。");

    cy.contains("p", "お名前を入力してください。").should("not.be.visible");
    cy.contains("p", "お名前（フリガナ）を入力してください。").should(
      "not.be.visible"
    );
    cy.contains("p", "メールアドレスを入力してください。").should(
      "not.be.visible"
    );

    cy.contains("p", "電話番号を入力してください。").should("not.be.visible");
    cy.contains("p", "都道府県を選択してください");
    cy.contains("p", "市区町村・番地を入力してください。").should(
      "not.be.visible"
    );
    cy.contains("p", "希望連絡方法を選択してください。");
    cy.contains("p", "ご来場人数を入力してください。").should("not.be.visible");
    cy.contains("p", "「お客さまの個人情報の利用目的」をご確認ください。");
  });

  it("セレクトボックスのエラーメッセージが消えるか", () => {
    cy.get("div.prefecture-wrapper")
      .children("div.select-wrapper")
      .children("select")
      .should("be.visible");
    cy.get("div.prefecture-wrapper")
      .children("div.select-wrapper")
      .children("select")
      .select("北海道", { force: true });

    cy.get("div.contact-wrapper")
      .children("div.select-wrapper")
      .children("select")
      .should("be.visible");
    cy.get("div.contact-wrapper")
      .children("div.select-wrapper")
      .children("select")
      .select("メール", { force: true });

    cy.contains("次へ進む").click({ force: true });

    cy.contains("p", "入力内容に不足または誤りがあります。");
    cy.contains("p", "入力項目の赤字部分の内容を再度入力してください。");

    cy.contains("p", "お名前を入力してください。").should("not.be.visible");
    cy.contains("p", "お名前（フリガナ）を入力してください。").should(
      "not.be.visible"
    );
    cy.contains("p", "メールアドレスを入力してください。").should(
      "not.be.visible"
    );

    cy.contains("p", "電話番号を入力してください。").should("not.be.visible");
    cy.contains("p", "都道府県を選択してください").should("not.be.visible");
    cy.contains("p", "市区町村・番地を入力してください。").should(
      "not.be.visible"
    );
    cy.contains("p", "希望連絡方法を選択してください。").should(
      "not.be.visible"
    );
    cy.contains("p", "ご来場人数を入力してください。").should("not.be.visible");
    cy.contains("p", "「お客さまの個人情報の利用目的」をご確認ください。");
  });
  it("ラジオボタンのエラーメッセージが消えるか,確認ページに遷移するか", () => {
    cy.get("div.concent-wrapper")
      .children("div.radio-wrapper")
      .children("label.radio")
      .should("be.visible");
    cy.get("div.concent-wrapper")
      .children("div.radio-wrapper")
      .children("label.radio")
      .click({ force: true }, setTimeout(3000));
    // radioボタンがcheckedになっているか
    cy.get("div.concent-wrapper")
      .children("div.radio-wrapper")
      .children('[type="radio"]')
      .should("be.checked");

    cy.contains("次へ進む").click({ force: true });
    cy.contains("p", "入力内容に不足または誤りがあります。").should(
      "not.be.visible"
    );
    cy.contains("p", "入力項目の赤字部分の内容を再度入力してください。").should(
      "not.be.visible"
    );
    cy.contains("p", "お名前を入力してください。").should("not.be.visible");
    cy.contains("p", "お名前（フリガナ）を入力してください。").should(
      "not.be.visible"
    );
    cy.contains("p", "メールアドレスを入力してください。").should(
      "not.be.visible"
    );
    cy.contains("p", "電話番号を入力してください。").should("not.be.visible");
    cy.contains("p", "都道府県を選択してください").should("not.be.visible");
    cy.contains("p", "市区町村・番地を入力してください。").should(
      "not.be.visible"
    );
    cy.contains("p", "希望連絡方法を選択してください。").should(
      "not.be.visible"
    );
    cy.contains("p", "ご来場人数を入力してください。").should("not.be.visible");

    // cssの色で要素を指定したい・・・

    // cy.contains("p", "「お客さまの個人情報の利用目的」をご確認ください。")
    //   .should("have.css", "color: #ff0000")
    //   .should("not.be.visible");

    cy.url().should("eq", "http://localhost:8081/Confirm");
  });
});

describe("My First Test", () => {
  it("Formページからの画面遷移", () => {
    cy.visit("/Form");
    cy.contains("前の画面に戻る").click({ force: true });
    // ブランクページになり失敗
    // cy.url().should("eq", "http://localhost:8081");
  });
});
