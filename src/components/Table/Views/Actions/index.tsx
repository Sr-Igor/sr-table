//Styles
import * as S from "./styled";

//React && Hooks
import { useMemo, useState } from "react";
import { useInternal } from "../../../../hooks/context";

//MUI
import { Popover } from "@mui/material";

//Assets
import { Ellipsis, ChevronRight } from "lucide-react";

//Types
import { ActionsProps } from "../../types";

export function Actions<T>({ item, actions }: Readonly<ActionsProps<T>>) {
  const internal = useInternal();
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const allHidden = useMemo(
    () => actions.every((action) => action?.hide?.(item)),
    [actions, item]
  );

  return (
    <>
      <button className="actions" onClick={(e) => setAnchorEl(e.currentTarget)}>
        <Ellipsis />
      </button>

      <Popover
        open={!!anchorEl}
        anchorEl={anchorEl}
        id={anchorEl ? "simple-popover" : undefined}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        sx={{
          ".MuiPaper-root": {
            backgroundColor: internal.colors.background,
            borderRadius: "8px",
          },
        }}
      >
        <S.Content internal={internal}>
          {actions.map((action, index) => {
            const isHidden = action?.hide?.(item);
            if (isHidden) return null;

            return (
              <button
                key={`actions--table--${index}--${action?.title}`}
                onClick={() => {
                  setAnchorEl(null);
                  action.onClick(item);
                }}
              >
                <p>{action.title}</p>
                <ChevronRight size={16} />
              </button>
            );
          })}
          {allHidden && (
            <p className="actions--empty">Nenhuma ação disponível</p>
          )}
        </S.Content>
      </Popover>
    </>
  );
}
