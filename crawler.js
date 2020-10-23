var fs = require("fs");
var http = require("https");

const baseUrl = "comic.webnewtype.com";
const dirs = {
  geass: {
    "04": [ // https://comic.webnewtype.com/contents/geass_f/4/json/
      "/rsz/C1/img/comic/geass_f/04-01-aaa99f5f-febe-4c8e-a59f-ff115a579a41.jpg/h1200q75nc/",
      "/rsz/C1/img/comic/geass_f/04-02-604bbbf0-6784-409e-a94f-57243082778c.jpg/h1200q75nc/",
      "/rsz/C1/img/comic/geass_f/04-03-adcb875c-4af4-47d6-ac30-8f2f0c3760a4.jpg/h1200q75nc/",
      "/rsz/C1/img/comic/geass_f/04-04-05-265f7f9b-5542-42fa-8cb9-46e6af8078e0.jpg/h1200q75nc/",
      "/rsz/C1/img/comic/geass_f/04-06-ca411493-e45e-4774-af34-4cc8c77de6a1.jpg/h1200q75nc/",
      "/rsz/C1/img/comic/geass_f/04-07-989d3e9d-3502-448e-be1c-9cfbb2fb0c7d.jpg/h1200q75nc/",
      "/rsz/C1/img/comic/geass_f/04-08-3a7a01cc-7c56-4eb8-a9d6-ab175de96761.jpg/h1200q75nc/",
      "/rsz/C1/img/comic/geass_f/04-09-9484502d-3436-47d9-b59f-3b4f048f3830.jpg/h1200q75nc/",
      "/rsz/C1/img/comic/geass_f/04-10-36b6f653-281e-4939-9051-b88badbafcc6.jpg/h1200q75nc/",
      "/rsz/C1/img/comic/geass_f/04-11-1f0ad3de-564a-4f79-83b4-26f9b6dd1972.jpg/h1200q75nc/",
      "/rsz/C1/img/comic/geass_f/04-12-97dee79f-16c4-40d2-b44a-05e3dc4b6577.jpg/h1200q75nc/",
      "/rsz/C1/img/comic/geass_f/04-13-ad214b60-7a77-4217-b01a-3039f94b4347.jpg/h1200q75nc/",
      "/rsz/C1/img/comic/geass_f/04-14-03e81096-5fe4-426b-8bf6-cdf029762e1a.jpg/h1200q75nc/",
      "/rsz/C1/img/comic/geass_f/04-15-51970cd6-d49a-4cc2-a82b-9813f09491cc.jpg/h1200q75nc/",
      "/rsz/C1/img/comic/geass_f/04-16-f4430aa1-8a35-405a-adb3-b3a0bdfea0e7.jpg/h1200q75nc/",
      "/rsz/C1/img/comic/geass_f/04-17-aafc6779-fe35-4cf4-87be-27d2634b590e.jpg/h1200q75nc/",
      "/rsz/C1/img/comic/geass_f/04-18-19-bbd2d1b6-f121-4fbe-b79e-fd80cca5d9ae.jpg/h1200q75nc/",
      "/rsz/C1/img/comic/geass_f/04-20-ebc8690d-0c8e-40f4-8274-faf7850d8f51.jpg/h1200q75nc/",
      "/rsz/C1/img/comic/geass_f/04-21-a7a0ff07-6d8e-498f-a7d4-8c7c34dd184e.jpg/h1200q75nc/",
      "/rsz/C1/img/comic/geass_f/04-22-71e962a4-4e24-46db-9066-1a9f28f82713.jpg/h1200q75nc/",
      "/rsz/C1/img/comic/geass_f/04-23-ea24c1ca-a11f-4f2a-97e6-d84e9b3c0b0b.jpg/h1200q75nc/",
      "/rsz/C1/img/comic/geass_f/04-24-f25042d2-bed3-4191-be05-b7479275880f.jpg/h1200q75nc/",
      "/rsz/C1/img/comic/geass_f/04-25-219e94df-2ec3-4728-aad4-7668221a3b42.jpg/h1200q75nc/",
      "/rsz/C1/img/comic/geass_f/04-26-88968f41-fa54-4a7a-926e-de45b9c82a33.jpg/h1200q75nc/",
      "/rsz/C1/img/comic/geass_f/04-27-2ff8671c-6fb3-4783-ac86-7c9b44d7a1e7.jpg/h1200q75nc/",
      "/rsz/C1/img/comic/geass_f/04-28-b9b3663d-169a-4cb0-a3ee-03172da1d5e7.jpg/h1200q75nc/",
      "/rsz/C1/img/comic/geass_f/04-29-cdf026e5-98f7-4450-a8bf-bc6bd5a5c14c.jpg/h1200q75nc/",
      "/rsz/C1/img/comic/geass_f/04-30-a7f4bd56-288a-42ee-ae79-649a4eaff7f3.jpg/h1200q75nc/",
      "/rsz/C1/img/comic/geass_f/04-31-e5620221-8a8a-4d5d-99d9-30b41762469b.jpg/h1200q75nc/",
      "/rsz/C1/img/comic/geass_f/04-32-44e01cc1-2358-4db7-a46b-94c47a9e2da5.jpg/h1200q75nc/",
      "/rsz/C1/img/comic/geass_f/04-33-c444a1dc-0458-4d94-a2fd-55295db37496.jpg/h1200q75nc/",
      "/rsz/C1/img/comic/geass_f/04-34-d54e18fd-0ef3-4417-a2cb-79827a289a70.jpg/h1200q75nc/",
      "/rsz/C1/img/comic/geass_f/04-35-5b7f4a13-ea48-42f6-a4c6-b830b9d7fed3.jpg/h1200q75nc/",
      "/rsz/C1/img/comic/geass_f/04-36-7eb4dbc2-5c0c-4d42-9611-828db882d1de.jpg/h1200q75nc/",
      "/rsz/C1/img/comic/geass_f/04-37-3081166a-ba4a-4578-8857-ad42143e62bc.jpg/h1200q75nc/",
    ],
  },
  soraao: {
    "12": [ // https://comic.webnewtype.com/contents/soraao/12/json/
      "/rsz/C1/img/comic/soraao/soraao_12_01-b8f94d87-9c9c-41b9-b2e0-2a36893f48ad.jpg/h1200q75nc/",
      "/rsz/C1/img/comic/soraao/soraao_12_02-3dc87578-0c62-4a7f-b4fc-786d3cada22f.jpg/h1200q75nc/",
      "/rsz/C1/img/comic/soraao/soraao_12_03-1a3230df-f2b0-45b2-bad1-cda2daf3b910.jpg/h1200q75nc/",
      "/rsz/C1/img/comic/soraao/soraao_12_04-c21c7047-a702-4e22-9332-388ab59a3736.jpg/h1200q75nc/",
      "/rsz/C1/img/comic/soraao/soraao_12_05-88a66005-45cb-4c92-b47e-069d5eba6a7a.jpg/h1200q75nc/",
      "/rsz/C1/img/comic/soraao/soraao_12_06-081d0a8a-1c66-47ac-8b98-49c0f7466ce7.jpg/h1200q75nc/",
      "/rsz/C1/img/comic/soraao/soraao_12_07-d66dd832-16cc-4135-8e51-34da41590d4f.jpg/h1200q75nc/",
      "/rsz/C1/img/comic/soraao/soraao_12_08-cd0b3e90-05c8-400e-a820-5ec108068620.jpg/h1200q75nc/",
      "/rsz/C1/img/comic/soraao/soraao_12_09-46f4bec8-8a64-4178-ad08-a51226715586.jpg/h1200q75nc/",
      "/rsz/C1/img/comic/soraao/soraao_12_10-65f7a2a0-8cdf-4051-b508-44b9e8f1b26b.jpg/h1200q75nc/",
      "/rsz/C1/img/comic/soraao/soraao_12_11-7b68d396-0b6d-44ea-85d8-b8b17af03a79.jpg/h1200q75nc/",
      "/rsz/C1/img/comic/soraao/soraao_12_12-63e8d8fd-46a5-43cf-93d8-1309ba85f084.jpg/h1200q75nc/",
      "/rsz/C1/img/comic/soraao/soraao_12_13-2d29fb4d-e5e9-4dab-a45d-61c80d5ce0ba.jpg/h1200q75nc/",
      "/rsz/C1/img/comic/soraao/soraao_12_14-8759fba4-2b8c-45f2-a892-e16f47e829e5.jpg/h1200q75nc/",
      "/rsz/C1/img/comic/soraao/soraao_12_15-c4548709-ed4f-41fa-9ef5-43aefb5b4673.jpg/h1200q75nc/",
      "/rsz/C1/img/comic/soraao/soraao_12_16-6f627888-8fbb-4173-8c85-1c3a9225c59d.jpg/h1200q75nc/",
      "/rsz/C1/img/comic/soraao/soraao_12_17-2c5978e8-618c-4d50-a498-b896eabb2dee.jpg/h1200q75nc/",
      "/rsz/C1/img/comic/soraao/soraao_12_18-52f09ec3-c306-4ff3-a3bc-36762a459f73.jpg/h1200q75nc/",
      "/rsz/C1/img/comic/soraao/soraao_12_19-56b1d628-e6de-4972-9855-d99d2a836efc.jpg/h1200q75nc/",
      "/rsz/C1/img/comic/soraao/soraao_12_20-bffd57be-c429-4dc5-863c-9f140431a07b.jpg/h1200q75nc/",
      "/rsz/C1/img/comic/soraao/soraao_12_21-1a97ac6b-b00a-4450-a534-11b3f41ab9b0.jpg/h1200q75nc/",
      "/rsz/C1/img/comic/soraao/soraao_12_22-cb5b0893-3a4d-47d1-b5e6-913b9e459afc.jpg/h1200q75nc/",
      "/rsz/C1/img/comic/soraao/soraao_12_23-895a2df1-fbaf-4ca4-a4f5-c890c6f72a60.jpg/h1200q75nc/",
      "/rsz/C1/img/comic/soraao/soraao_12_24-706999bb-14cb-4669-bf03-f206bd492acf.jpg/h1200q75nc/",
      "/rsz/C1/img/comic/soraao/soraao_12_25-888f4f4b-0215-4275-ae05-41ec05ba6c0a.jpg/h1200q75nc/",
      "/rsz/C1/img/comic/soraao/soraao_12_26-e5360f32-43a3-4b69-8e9d-7fb772ad1674.jpg/h1200q75nc/",
      "/rsz/C1/img/comic/soraao/soraao_12_27-f7edc77c-c04d-4d6d-b750-06856e326f4d.jpg/h1200q75nc/",
      "/rsz/C1/img/comic/soraao/soraao_12_28-3c738cf5-f767-4b54-9961-000c536f6c27.jpg/h1200q75nc/",
      "/rsz/C1/img/comic/soraao/soraao_12_29-1e7dc91c-c182-43ee-8fba-b5c8476807c9.jpg/h1200q75nc/",
      "/rsz/C1/img/comic/soraao/soraao_12_30-fc2143cf-cbcb-47a1-bfb2-37993378c4af.jpg/h1200q75nc/",
      "/rsz/C1/img/comic/soraao/soraao_12_31-93445bb0-579f-4735-b469-0bac7de0ae22.jpg/h1200q75nc/",
      "/rsz/C1/img/comic/soraao/soraao_12_32-5fa83cac-3020-480b-ae4e-27d99686b312.jpg/h1200q75nc/",
      "/rsz/C1/img/comic/soraao/soraao_12_33-7f143181-b01b-467e-9a22-613eace98321.jpg/h1200q75nc/",
      "/rsz/C1/img/comic/soraao/soraao_12_34-041bb2c8-6dea-48cf-917e-e40e74ae2c23.jpg/h1200q75nc/",
      "/rsz/C1/img/comic/soraao/soraao_12_35-6b24e666-2062-49e8-a9a8-de95f177af46.jpg/h1200q75nc/",
      "/rsz/C1/img/comic/soraao/soraao_12_36-9f48c4cc-60fe-4bb5-a646-908250bd0ea6.jpg/h1200q75nc/",
      "/rsz/C1/img/comic/soraao/soraao_12_37-6d397b4d-b453-4be4-84ee-8a1597feeffb.jpg/h1200q75nc/",
      "/rsz/C1/img/comic/soraao/soraao_12_38-e585e770-1845-4502-b1e1-1f182098eaf6.jpg/h1200q75nc/",
    ],
  },
};
const path = "D:\\OHLI\\crawler";

for (var dir in dirs) {
  var eps = dirs[dir];
  for (var ep in eps) {
    const epUrls = eps[ep];
    for (var i = 0; i < epUrls.length; i++) {
      const page = i + 1;
      const filePath = `${path}/${dir}/${ep}_${page > 9 ? "" : "0"}${page}.jpg`;
      http
        .request(
          {
            hostname: baseUrl,
            path: epUrls[i],
          },
          (response) => {
            response.pipe(fs.createWriteStream(filePath));
          }
        )
        .end();
    }
  }
}
