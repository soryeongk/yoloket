export default function Product() {
  return (
    <main>
      <header>
        <h1>[인기 상품 1위] 욜로켓 시그니처 디자인 제품</h1>
        <h5>상시주문가능</h5>
        <h5>#S사이즈</h5>
        <h5>#S사이즈</h5>
        <h5>#S사이즈</h5>
        <h5>#S사이즈</h5>
        <h5>#S사이즈</h5>
      </header>
      <section>
        <img src="imgUrl" alt="제품 이미지" />
        <article>
          <img src="imgUrl" alt="판매자 이미지" />
          <div>
            <div>
              <img src="imgUrl" alt="판매자 아이콘" />
              <h2>욜로마켓</h2>
            </div>
            <h3>
              욜로마켓에서 판매하는 모든 제품은 미국 매장에서 직배송해드리는 정품입니다. 언제든 편하게 문의 주시길
              바랍니다!
            </h3>
          </div>
        </article>
      </section>
      <section>
        <article>
          이 상품 구매 시, <strong>사용 가능 쿠폰 확인하기</strong>
          <img src="imgUrl" alt="쿠폰 다운로드 아이콘" />
        </article>
        <div>
          <strong>소재</strong>
          <h4>50% COTTON, 50% POLYESTER</h4>
        </div>
        <div>
          <strong>배송</strong>
          <h4>해외 무료 배송 | 주문 후 최대 3일 내로 발송 가능</h4>
        </div>
        <div>
          <strong>제품 간단 소개</strong>
          <h4>
            제품의 소개가 들어갈 예정입니다💕 판매자가 직접 작성한 제품의 설명이 들어갈 예정입니다.😎 제품의 특징과
            강점을 잘 살린 소개가 들어가는 것이 좋을 것 같습니다. 어떤 상황, 분위기, 장소에서 활용하면 좋은 제품인지에
            대한 설명도 있으면 좋을 듯합니다. 간결하고 직관적이면서 구체적인 설명이 들어간다면 더욱 구매를 유도할 수
            있을 것으로 보입니다.
          </h4>
        </div>
        <div>
          <label>옵션</label>
          <select form="submitOption">
            <option value="">사이즈를 선택해주세요</option>
            <option value="S">S</option>
            <option value="M">M</option>
          </select>
          <select form="submitOption">
            <option value="">색상을 선택해주세요</option>
            <option value="검정">검정</option>
            <option value="하양">하양</option>
            <option value="빨강">빨강</option>
          </select>
        </div>
        <form id="submitOption">
          <img src="imgUrl" alt="판매자에게 문의하기" />
          <button type="submit">구매하기</button>
        </form>
      </section>
    </main>
  );
}
