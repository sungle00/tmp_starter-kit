"use client"; 									// Error components must be Client Components

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Info } from "lucide-react";

export default function Error( { error, reset } ) {
	return (
		<div className="space-y-4">
			<Alert color="destructive" variant="soft">
				<Info class="h-5 w-5" />
				<AlertDescription>시스템에 문제가 발생했습니다!</AlertDescription>
			</Alert>
			<Button onClick={() => reset()} color="destructive" size="sm">
				다시시도하기
			</Button>
		</div>
	);
}
