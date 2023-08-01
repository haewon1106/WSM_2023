# CSS 정리
## 문서 스타일링 방법
1. ```<TAG style="">```
2. ```<style>...</style>```
3. __.css 파일 만들어서 link__

## 형식
```css
selector{
    attribute: value; /*comment*/
}
```

### selector
<pre>
*           모든 태그 다 적용
TAG         특정 태그 적용
#id         유일한 id에 적용
.class      같은 class에 적용

<**********************************시험문제**********************************>
selector1 > selector2       selector1의 자식 selector2에 적용<br>(자식 selector2요소만 적용)
selector1 selector2         selector1의 자손 selector2에 적용<br>(자식 + 자손 모든 하위 요소 적용)
selector1, selector2        selector1과 selector2에 함께 적용
selector1 + selector2       selector1의 첫째 자매 selector2 하나 선택<br>(se lector1 바로 밑에 오는 selector2 요소만 적용)
selector1 ~ selector2       selector1의 자매 중 모든 selector2 선택<br>(selector1 밑에있는 모든 하위 요소 적용)
                            p ~ ul: p요소 뒤에 있는 모든 자매 ul 선택한대요

selector:first-child()      selector 요소 중 첫번째
selector:nth-child(n)       자매 요소 중에서 특정 순서(n)에 있는 요소를 선택할 때
selector:hover              마우스 올렸을 때의 selector
[속성="값"]                   <...속성="값">에 적용
</pre>

# 우선순위
1. important
2. ```<TAG style="">```
3. #id
4. .class
5. TAG
6. \*
- 구체 > 포괄
- 같은 우선순위일 때, 나중에 쓴 게 적용
