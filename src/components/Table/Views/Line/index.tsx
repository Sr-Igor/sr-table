//Styles
import * as S from "./styled";

// Hooks
import { useInternal } from "../../../../hooks/context";

//Components
import { Tooltip, TooltipProps, styled, tooltipClasses } from "@mui/material";

//Types
import { IComposeProps } from "../../types";

export function Line<T>({
  value,
  loading,
  image,
  tooltip,
  textStyle,
}: Readonly<IComposeProps<T>>) {
  const internal = useInternal();

  const CustomWidthTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))({
    [`& .${tooltipClasses.tooltip}`]: {
      fontSize: "1.4rem",
      minHeight: "40px",
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "8px",
      border: `10px solid ${tooltip?.style?.backgroundColor || "#374151"}`,
      backgroundColor: "#374151",
      ...tooltip?.style,
    },
  });

  return (
    <S.Area internal={internal}>
      <S.Skt loading={loading} internal={internal} />
      {tooltip ? (
        <CustomWidthTooltip title={tooltip.title} placement="top-start">
          <div className="infos">
            {image && (
              <S.Avatar internal={internal}>
                <img src={image.path} alt={image.alt} />
              </S.Avatar>
            )}
            <p className="value" style={textStyle}>
              {value || "-"}
            </p>
          </div>
        </CustomWidthTooltip>
      ) : (
        <div className="infos">
          {image && (
            <S.Avatar internal={internal}>
              <img src={image.path} alt={image.alt} />
            </S.Avatar>
          )}
          <p className="value" style={textStyle}>
            {value || "-"}
          </p>
        </div>
      )}
    </S.Area>
  );
}
