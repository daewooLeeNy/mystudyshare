import GoalAssets from "@/app/goal-assets/page";
import { render } from "@testing-library/react";

describe("낙원 자산 화면", () => {
  it("기본값이 설정된 진입 페이지", () => {
    const { container } = render(<GoalAssets />);
    expect(container).toMatchSnapshot("기본값");
  });
});
