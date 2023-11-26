import { Modal, ModalVisibilityProps } from "../modal.component.tsx";
import useForm from "../../../hooks/useForm.ts";

import { InputComponent } from "../../input/input.component.tsx";
import { MaterialIcon } from "../../../utils/icons.ts";
import { dashboardRootStyles } from "../../../pages/content/app-main/tabs/dashboard-root/dashboard-root.styles.tsx";
import { useFetch } from "../../../models/useFetch.ts";
import "../../../sharedStyles/form.styles.css";
import {
  mergeFormEmptyForm,
  mergeFormValidationCriteria,
  MergeFormValues,
} from "./merge-employers.helper.ts";
import { LoadButtonComponent } from "../../load-button/load-button.component.tsx";
import { MergeRelationRequest } from "../../../models/employer.types.ts";
import { ApiRoutes } from "../../../models/api.types.ts";

