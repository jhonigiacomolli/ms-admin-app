import React, { ReactElement } from "react"
import EditIcon from 'assets/icon-edit.svg'
import AddIcon from 'assets/icon-plus.svg'
import GraphIcon from 'assets/icon-graph-bar.svg'
import ListIcon from 'assets/icon-list.svg'
import ConfigIcon from 'assets/icon-config.svg'
import TrashIcon from 'assets/icon-trash.svg'
import { Type_ButtonIcons } from "./types"

export const ButtonsIcons: Type_ButtonIcons = {
    edit: EditIcon,
    add: AddIcon,
    graph: GraphIcon,
    list: ListIcon,
    config: ConfigIcon,
    trash: TrashIcon,
    none: AddIcon,
}