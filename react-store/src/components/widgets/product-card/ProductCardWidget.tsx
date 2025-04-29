/*
 *---------------------------------------------------
 * Licensed Materials - Property of HCL Technologies
 *
 * HCL Commerce
 *
 * (C) Copyright HCL Technologies Limited 2020
 *
 *---------------------------------------------------
 */
//Standard libraries
import { useTranslation } from "react-i18next";
//UI
import { StyledGrid } from "@hcl-commerce-store-sdk/react-component";
//Custom libraries
import { ProductCardLayout } from "../../../components/widgets/product-card";
import { useMemo } from "react";

/**
 * Product Card component
 * displays catentry image, name, price, etc
 * @param props
 */
export default function useProductCardWidget(props: any) {
  const { productListTotal, productList, categoryId, selectedFacets, priceSelected, ...rest } = props;
  const { t } = useTranslation();
  const { numFacets, facetKey } = useMemo(() => {
    const facets = Object.keys(selectedFacets);
    return { numFacets: facets.length, facetKey: facets.join("-") };
  }, [selectedFacets]);

  return (
    <StyledGrid container spacing={2} alignItems="stretch" direction="row">
      {productListTotal > 0 ? (
        productList?.map((product) => (
          // key has to comprise a unique value from response (thumbnail is good enough, but we keep id as well)
          //   and a unique value from any filters (facets) currently applied -- the filters update sooner than
          //   the response does, so the true key is the filters+response (which why we use the thumbnail)
          <StyledGrid item xs={6} sm={4} lg={4} key={`${product.id}-${product.thumbnail}-${facetKey}`}>
            <ProductCardLayout product={product} categoryId={categoryId} {...rest} />
          </StyledGrid>
        ))
      ) : (
        <>
          {productListTotal === 0 && (numFacets || priceSelected) ? (
            <StyledGrid item xs={12}>
              {t("ProductGrid.Labels.noProductsFoundForFilter")}
            </StyledGrid>
          ) : null}
        </>
      )}
    </StyledGrid>
  );
}
